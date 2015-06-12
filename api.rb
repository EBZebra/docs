require 'xmlsimple'
require 'rdiscount'
require 'rest-client'
require 'json'
class Api
	@@version = ENV['version'].nil? ? "edge/" : ENV['version']+'/'
	@@apifolder = @@version + AppConfig['api_md']
	@@guidesfolder = @@version + AppConfig['guides_md']
	@@docsjson = @@version + AppConfig['docs_json']

	def self.update_xml
	 apiSources = AppConfig['api_sources'] || []
	 apiSources.each do |s|
	   apiSourceFolder = File.join(s,"**","*.xml")
	    puts apiSourceFolder
	   Dir.glob(apiSourceFolder).each do|f|
	    filename = File.basename(f)
	      puts filename
	    doc = XmlSimple.xml_in(f)
	    if !doc["MODULE"].nil?
	      gendoc = "true"
	      if filename !='AndroidManifest_rhomobile.xml' && filename != 'callback.xml' && filename != 'default_instance.xml' && filename != 'singleton_instances.xml' && filename != 'property_bag.xml' 
	        # puts f
	        # puts doc
	        # puts "*****************************************"
	        gendoc = doc["MODULE"][0]["generateDoc"]
	      end
	      # puts gendoc
	      if (gendoc.nil? || gendoc == "true") && filename !='AndroidManifest_rhomobile.xml'
	    
	        dest = File.join(@@apifolder,filename)
	        if !File.exists?(dest)
	          puts "New: #{filename}"
	        end
	        # puts filename
	        fileContents = IO.read(f)
	        File.open(dest,"w") do |fd|
	          fd.write(fileContents)
	        end
	      else
	      end
	    end
	   end
	 end
	end
	def self.process_xml
	  puts "rebuilding #{@@version} EB API docs"
	  apiXML = File.join(@@apifolder,"**","*.xml")
	  
	  apiFiles = Dir.glob(apiXML)

	  # Links that go to 127.0.0.1:9393 (where no server is running) get styled dark red
	  # Links that go to external sites (may not be reachable if user is truly offline) get italics
	  apiFiles.each do |fileName|
	    basename = fileName.gsub(@@apifolder,'')
	    if basename != 'callback.xml' && basename != 'default_instance.xml' && basename != 'singleton_instances.xml' && basename != 'property_bag.xml' 
	      puts "Processing " + basename
	    
	      ApiConvert.markdown(fileName)
	    end
	  end
	end
end
