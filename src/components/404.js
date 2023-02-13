import './404.css'

function Error404 () {
    return (
<div className ="notFound">
    <div className="notFound__smile">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
            <clipPath fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm12-36a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm49.7-57.7a8.1 8.1 0 0 1 0 11.4a8.2 8.2 0 0 1-11.4 0L168 123.3l-10.3 10.4a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4l10.4-10.3l-10.4-10.3a8.1 8.1 0 0 1 11.4-11.4l10.3 10.4l10.3-10.4a8.1 8.1 0 0 1 11.4 11.4L179.3 112Zm-80-20.6L99.3 112l10.4 10.3a8.1 8.1 0 0 1 0 11.4a8.2 8.2 0 0 1-11.4 0L88 123.3l-10.3 10.4a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4L76.7 112l-10.4-10.3a8.1 8.1 0 0 1 11.4-11.4L88 100.7l10.3-10.4a8.1 8.1 0 0 1 11.4 11.4Z"/>
        </svg>
    </div>
    <div className="notFound__text">
        <div className="notFound__404">404</div>
        <div className="notFound__title">Page not found</div>
        <div className="notFound__subtitle">The page you're looking for doesn't exist</div>
    </div>
</div>
    )
}

export default Error404;