class Videos::IndexPage < MainLayout
  def page_title
    "Videos"
  end

  def content
    section class: "p-16" do
      div class: "flex justify-center" do
        render_embedded_yt_video src: "https://www.youtube-nocookie.com/embed/Ff3ebB6Un8M"
      end
    end
  end

  def render_embedded_yt_video(src : String)
    iframe width: 560, height: 315, src: src, title: "YouTube video player", frameborder: 0,
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      attrs: [:allowfullscreen]
  end
end
