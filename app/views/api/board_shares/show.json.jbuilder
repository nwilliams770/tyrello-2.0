@shared_withs.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :img_url
  end
end
