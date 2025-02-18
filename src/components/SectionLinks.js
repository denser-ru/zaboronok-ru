import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBook, FaUsers, FaVideo } from 'react-icons/fa';

function SectionLinks() {
  return (
    <div className="d-flex justify-content-around mb-4">
      <div>
          <Button as={Link} to="/biography" variant="link" className="text-decoration-none">
            <FaBook size={24} />
            <p>Биография</p>
          </Button>
      </div>

      <div>
          <Button as={Link} to="/activities" variant="link" className="text-decoration-none">
           <FaUsers size={24} />
            <p>Деятельность</p>
          </Button>
      </div>

      <div>
         <Button as={Link} to="/webinars" variant="link" className="text-decoration-none">
            <FaVideo size={24} />
            <p>Вебинары</p>
          </Button>
      </div>

    </div>
  );
}

export default SectionLinks;