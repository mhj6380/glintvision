import { useCallback, useEffect, useRef } from "react";

function Map2() {
  const mapElement = useRef(null);

  // 컴포넌트가 마운트될 때, 수동으로 스크립트를 넣어줍니다.
  const loadScript = useCallback((url) => {
    const firstScript = window.document.getElementsByTagName("script")[0];
    const newScript = window.document.createElement("script");
    newScript.src = url;
    newScript.async = true;
    newScript.defer = true;
    firstScript?.parentNode?.insertBefore(newScript, firstScript);
  }, []);

  // script에서 google map api를 가져온 후에 실행될 callback 함수
  const initMap = useCallback(() => {
    const { google } = window;
    if (!mapElement.current || !google) return;

    const location = { lat: 36.9549695, lng: 127.455483 };
    const map = new google.maps.Map(mapElement.current, {
      zoom: 17,
      center: location,
    });
    new google.maps.Marker({
      position: location,
      map,
    });
  }, []);

  useEffect(() => {
    const script = window.document.getElementsByTagName("script")[0];
    const includeCheck = script.src.startsWith("https://maps.googleapis.com/maps/api");

    // script 중복 호출 방지
    if (includeCheck) return initMap();

    window.initMap = initMap;
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyA2lzzi_QhxVns4Sb-ff6agXItwxirg6n8&callback=initMap&language=en"
    );
  }, [initMap, loadScript]);

  return <div ref={mapElement} style={{ minHeight: "400px" }} />;
}

export default Map2;
