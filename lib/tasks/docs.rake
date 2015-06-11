desc 'generate docs optional "version=" param to generate specific version otherwise edge is used'
task :docs_generate do
	 Docs.generate_json_index
end