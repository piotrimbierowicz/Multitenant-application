require 'spec_helper'

describe StatsController do

  describe "GET 'index'" do
    it "returns http success" do
      get 'index'
      response.should be_success
    end
  end

  describe "GET 'passes'" do
    it "returns http success" do
      get 'passes'
      response.should be_success
    end
  end

end
