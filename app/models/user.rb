class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :boards,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Board

  has_many :board_shares,
    primary_key: :id,
    foreign_key: :contributor_id,
    class_name: :BoardShare

  has_many :shared_boards,
    through: :board_shares,
    source: :board


  def self.top_ten_results(query_param, current_user)
    current_user_id = current_user.id if current_user
    param = '%' + query_param.downcase + '%'
    User.where.not(id: current_user_id).
        where('lower(username) LIKE ? or lower(email) LIKE ?', param, param).limit(10)
  end
  
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
end
