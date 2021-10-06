
const LiveStreaming=()=>{
    return(
        <>
            <section className="home-live-streaming mt-10 mb-10">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="title">
                                <h2>Live Streaming</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <a data-toggle="modal" data-src="https://www.youtube.com/embed/JLnycPtolfw" data-target="#modallive" className="video-btn" href="#">
                                <div className="home-live-streaming-list">
                                    <div className="home-live-streaming-img">
                                        <img alt="" className="card-img-top" src="images/home-live-streaming-img-1.jpg" />
                                        <span className="blink-text">Live</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <a data-toggle="modal" data-src="https://www.youtube.com/embed/JLnycPtolfw" data-target="#modallive" className="video-btn" href="#">
                                        <div className="home-live-streaming-list home-live-streaming-small">
                                            <div className="home-live-streaming-img">
                                                <img alt="" className="card-img-top" src="images/home-live-streaming-img-2.jpg" />
                                                <span className="blink-text">Live</span>
                                            </div>
                                            <h3>PWM RGB Case Fans,  GIM White 120mm 3 </h3>
                                        </div>
                                    </a>
                                    <a data-toggle="modal" data-src="https://www.youtube.com/embed/JLnycPtolfw" data-target="#modallive" className="video-btn" href="#">
                                        <div className="home-live-streaming-list home-live-streaming-small">
                                            <div className="home-live-streaming-img">
                                                <img alt="" className="card-img-top" src="images/home-live-streaming-img-2.jpg" />
                                                <span className="blink-text">Live</span>
                                            </div>
                                            <h3>Jelly Belly 49 Assorted Flavors Jelly Beans</h3>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <a data-toggle="modal" data-src="https://www.youtube.com/embed/JLnycPtolfw" data-target="#modallive" className="video-btn" href="#">
                                        <div className="home-live-streaming-list home-live-streaming-small">
                                            <div className="home-live-streaming-img">
                                                <img alt="" className="card-img-top" src="images/home-live-streaming-img-2.jpg" />
                                                <span className="blink-text">Live</span>
                                            </div>
                                            <h3>PWM RGB Case Fans,  GIM White 120mm 3 </h3>
                                        </div>
                                    </a>
                                    <div className="home-live-streaming-list home-live-streaming-ads">
                                        <div className="home-live-streaming-img">
                                            <img alt="" className="card-img-top" src="images/ad1.jpg" />				                    	
                                        </div>				                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>		
                		
                <div aria-hidden="true" aria-labelledby="myModalLabel" className="modal fade" id="modallive" role="dialog" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-body mb-0 p-0">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                                </div>
                            </div>
                            <div className="modal-footer justify-content-between">
                                <h5>Live Streaming</h5>
                                <button className="btn btn-outline-primary btn-rounded btn-md" data-dismiss="modal" type="button">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LiveStreaming;