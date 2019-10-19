# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :timeoutable and :omniauthable
  devise :database_authenticatable,
         :registerable, :lockable, :invitable,
         :recoverable, :rememberable, :confirmable, :trackable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  scope :active, -> { where(locked_at: nil) }

  def admin?
    email.in? Settings.admin.emails
  end

  # Failsafe when disabled confirmable
  def confirmed?
    if defined? super
      super
    else
      true
    end
  end

  def pending_reconfirmation?
    if defined? super
      super
    else
      false
    end
  end

  def created_by_invite?
    if defined? super
      super
    else
      false
    end
  end

  include Devise::JWT::RevocationStrategies::Whitelist

  def self.find_for_jwt_authentication(sub)
    find_by(email: sub)
  end

  def jwt_subject
    email
  end

  def expired_jwts
    whitelisted_jwts.where("exp <= ?", Time.now)
  end
end
