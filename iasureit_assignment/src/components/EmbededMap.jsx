import React from 'react'

const EmbededMap = () => {
  return (
    <><iframe
    id="map-canvas"
    class="map_part"
    width="100%"
    height="340"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=1B, 2nd, BUILDING-B3, CEREBRUM IT PARK, Marigold complex, Kalyani Nagar, Pune, Maharashtra 411014&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
  >
    Powered by{" "}
    <a href="https://embedgooglemaps.com">
      how to embed google maps generator
    </a>{" "}
    and{" "}
    <a href="https://yatzyregler.com/maxi-yatzy-regler/">
      Maxi Yatzy regler
    </a>
  </iframe></>
  )
}

export default EmbededMap