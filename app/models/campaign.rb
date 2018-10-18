class Campaign < ApplicationRecord
    after_validation :set_member, on: :create
    before_validation :set_status, on: :create

    validates :title, :description, :user, :status, presence: true
  
    belongs_to :user
    has_many :members, dependent: :destroy

    enum status: [:pending, :finished]

    private
  
    def set_status
      self.status = :pending
    end
  
    def set_member
      self.members << Member.create(name: self.user.name, email: self.user.email)
    end
  end