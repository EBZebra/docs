desc 'update api docs for eb - parent repos must be at same level'
task :update_xml do
  Api.update_xml
end

desc 'process api docs for eb '
task :process_xml do
  Api.process_xml
  Docs.generate_json_index
end