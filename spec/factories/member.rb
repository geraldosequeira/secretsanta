FactoryGirl.define do 
    factory :member do 
        name { FFaker::Lorem.word }
        email { FFaker::Internet.email }
        campaing
    end
end

#create(:member, campaign: @campaing)
#build(:member, camaing: @campaing)