module Qbo
  class Account
    FIELDS = %w(Id FullyQualifiedName Classification AccountSubType CurrentBalanceWithSubAccounts AccountType CurrentBalance SubAccount).freeze

    def initialize(data)
      @data = data
      @response = {}
    end

    def response
      # used for columns
      @response[:fields] = FIELDS
      @response[:items] = []

      # values for those columns
      @data.each do |data|
        result = {}
        FIELDS.map {|field| result[field] = data[field]}

        @response[:items] << result
      end

      @response
    end
  end
end