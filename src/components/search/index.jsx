/******************************************
 *  Author : Suraj Sharma
 *  Created On : Mon Apr 18 2022
 *  File : index.jsx
 *******************************************/
import styles from "./Search.module.css";
import Data from './data';

export const Body = props => {
    return (
        <div>
            {
                Data.map((d, idx) => {
                    return (
                        <div key={idx}>
                            <div className="container mt-4">
                                <h1>{d.title}</h1>

                                <div className={styles.globalSearch}>
                                    <span>If you didn't find what you were looking for, try a new search!</span>
                                    <form>
                                        <input className={styles.searchInput} type="text" onChange={props.handleTextChange}/>
                                        <button type="submit" onClick={props.onSubmit}><i class="fa fa-search"></i></button>
                                    </form>

                                    <div className={styles.globalSearchResult}>
                                        <a href="/programs/dataScience">
                                            Data Science
                                        </a>
                                        <p>

                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}