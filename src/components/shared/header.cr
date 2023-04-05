class Shared::Header < BaseComponent
  def render
    header class: "font-title text-4xl bg-eerie-black sticky top-0 w-full" do
      section class: "p-4 flex justify-between self-baseline" do
        div class: "h-12 flex items-center" do
          link "STATE OF NEPTUNE",
            class: "text-5xl transition-all md:text-4xl hover:text-persian-blue",
            to: Home::Index
        end

        nav class: "font-subtitle text-2xl hidden transition-all md:flex" do
          ul class: "flex justify-center items-center gap-8" do
            page_references = [
              {"HOME", Home::Index},
              {"MUSIC", Music::Index},
              {"VIDEOS", Videos::Index},
              {"STAGES", Stages::Index},
            ]

            page_references.each do |page_title, page|
              div class: "h-12 flex items-center" do
                link page_title, class: "transition hover:text-persian-blue", to: page
              end
            end
          end
        end
      end
    end
  end
end
