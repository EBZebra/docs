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

end
