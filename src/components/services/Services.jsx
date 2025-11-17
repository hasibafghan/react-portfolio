import "./Services.css";
import ServicesItem from "./ServicesItem";

let services = [
  {
    'ServiceIcon'  : 'bi bi-briefcase',
    'ServiceTitle' : 'Web Design',
    'ServiceInfo'  : "1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.s "
  },
  {
    'ServiceIcon'  : 'bi bi-card-checklist',
    'ServiceTitle' : 'Backend Developer',
    'ServiceInfo'  : "2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.s "
  },
  {
    'ServiceIcon'  : 'bi bi-bar-chart',
    'ServiceTitle' : 'Frontend Developer',
    'ServiceInfo'  : "3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.s "
  },

]

function Services() {
  return (
    // <!-- services -->
    <section id="services">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">SERVICES</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          <ServicesItem {...services[0]}></ServicesItem>
          <ServicesItem {...services[1]} ></ServicesItem>
          <ServicesItem {...services[2]}></ServicesItem>
          <ServicesItem {...services[0]}></ServicesItem>
          <ServicesItem {...services[1]} ></ServicesItem>
          <ServicesItem {...services[2]}></ServicesItem>
        </div>
      </div>
    </section>
  );
}

export default Services;
