FactoryGirl.define do 
    factory :user do 
        name { FFaker::Lorem.word }
        email { FFaker::Internet.email }
        password "test123"
    end
end