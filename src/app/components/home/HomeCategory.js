const HomeCategory=(props)=>{
    return(
        <>
            {
                props.categories?
                <section className="home-category mb-10">
                    <div className="container">
                        <div className="row">
                            {
                                props.categories.map((cat_val,i)=>{
                                    return(
                                        <div className="col-md-6" key={cat_val.id}>
                                            <div className="category-list category-list-big">
                                                <div className="category-list-img" style={{backgroundImage: "url('images/home-category-img-"+(i+1)+".jpg')" }}></div>
                                                <span>{cat_val.name}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
                :""
            }
        </>
    )
}

export default HomeCategory;