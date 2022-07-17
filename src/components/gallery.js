import React from 'react'

import GalleryCard2 from './gallery-card2'
import './gallery.css'

const Gallery = (props) => {
  return (
    <div className="gallery-gallery">
      <div className="gallery-container">
        <div className="gallery-container1">
          <div className="gallery-container2">
            <GalleryCard2 rootClassName="rootClassName2"></GalleryCard2>
          </div>
          <div className="gallery-container3">
            <GalleryCard2
              image_src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGZvb2R8ZW58MHx8fHwxNjI2NDQ5NjUy&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName3"
            ></GalleryCard2>
          </div>
        </div>
        <div className="gallery-container4">
          <GalleryCard2
            image_src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName"
          ></GalleryCard2>
        </div>
      </div>
      <div className="gallery-container5">
        <GalleryCard2
          image_src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
          rootClassName="rootClassName4"
        ></GalleryCard2>
      </div>
    </div>
  )
}

export default Gallery
