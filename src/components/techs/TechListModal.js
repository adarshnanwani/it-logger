import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';
import TechItem from './TechItem';

const TechListModal = ({ techs, loading, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, [techs]);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs &&
            techs.map((tech) => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  techs: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    techs: state.tech.techs,
    loading: state.tech.loading,
  };
};

export default connect(mapStateToProps, { getTechs })(TechListModal);
