import { Link } from 'react-router-dom'

const Pagination = ({ reviewsPerPage, totalReviews, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalReviews/ reviewsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <div>
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <Link to="!#" onClick={() => paginate(number)} className="page-link">
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Pagination