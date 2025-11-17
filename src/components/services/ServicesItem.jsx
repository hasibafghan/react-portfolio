function ServicesItem(props) {
  return (
    <div className="col-4">
      <div className="service-box">
        <div className="service-icon">
          <i className={props.ServiceIcon}></i>
        </div>
        <div className="service-content">
          <h3 className="service-title">{props.ServiceTitle}</h3>
          <p className="service-info">
            {props.ServiceInfo}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesItem