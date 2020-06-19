import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="flex bg-pink-100 w-screen flex h-10 flex-row flex-no-wrap justify-start px-10">
    <h1 className="text-gray-600 uppercase h-10 self-stretch leading-10">
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
