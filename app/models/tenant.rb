##
# Model reprezentujący organizacje posiadające własny namespace i schemat bazy
require 'pg_tools'
class Tenant < ActiveRecord::Base
  after_create :prepare_tenant

  validates_presence_of :name

  private

  def prepare_tenant
    create_schema
    load_tables
  end

  def create_schema
    PgTools.create_schema id unless PgTools.schemas.include? id.to_s
  end

  def load_tables
    return if Rails.env.test?
    PgTools.set_search_path id, false
    load "#{Rails.root}/db/schema.rb"
    PgTools.restore_default_search_path
  end
end
