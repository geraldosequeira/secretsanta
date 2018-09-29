class Campaign < ApplicationRecord
    belongs_to :user
    has_many :members, dependent: :destroy

    enum status: [:pending, :finished]

    validates :title, :description, :user, :status, presence: true

    before_create :set_status
    before_create :set_member

    def set_staus
        self.status = :pending
    end

    def set_member
        self.members << Member.create(name: self.user.name, email: self.user.email)
    end
ende