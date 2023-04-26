class Shared::LayoutHead < BaseComponent
  needs page_title : String

  def render
    head do
      utf8_charset
      title "State Of Neptune - Official Website - #{@page_title}"
      css_link asset("css/app.css")

      js_link asset("js/app.js"), defer: "true"
      js_link "https://kit.fontawesome.com/a83a491fe5.js", crossorigin: "anonymous"

      csrf_meta_tags
      responsive_meta_tag

      # Development helper used with the `lucky watch` command.
      # Reloads the browser when files are updated.
      live_reload_connect_tag if LuckyEnv.development?
    end
  end
end
