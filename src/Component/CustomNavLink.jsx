import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const CustomNavLink = ({to,children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isActive
                    ? "active"
                    : isPending
                        ? "pending"
                        : ""
            }
        >
          {children}
        </NavLink>
    );
};
CustomNavLink.propTypes={
    to: PropTypes.string,
    children: PropTypes.string
}

export default CustomNavLink;