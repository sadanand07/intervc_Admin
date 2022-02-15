// Import Dependencies
import { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
// Import Styles
import styles from "./ContactDetails.module.scss";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
/*
 */
export default function MainContentContactDetails({
  userSelected,
  setLoading,
  List_Url,
}) {
  const token = localStorage.getItem("token");
  const [Details, setDetails] = useState({});
  const [IDetail, setIDetails] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get(`https://shivila.herokuapp.com/api/v1/users/${userSelected} `, {
          headers: {
            Authorization: "Token " + token,
          },
        })
        .then((res) => {
          const { data } = res;
          console.log(res);
          setDetails(data);
          /*  console.log(data); */
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getData();

    /* const interview_url = `https://shivila.herokuapp.com/api/v1/interviews/?id=${userSelected}` */
    const interview_url = `https://shivila.herokuapp.com/api/v1/interviews/`;
    const getInterview = async () => {
      await axios
        .get(interview_url, {
          headers: {
            Authorization: "Token " + token,
          },
        })
        .then((res) => {
          const { data } = res;
          console.log(res);

          setIDetails(data);

          /* console.log(IDetail) */
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getInterview();
  }, [token, userSelected]);

  return (
    // Content In Home Page
    <section className={styles.intro}>
      {/* Profile Details */}
      <div className={styles.profile}>
        {/* Profile Image */}
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="/image/account/Male.png"
            alt="Male"
          />
        </div>

        {/* Interview Details */}
        <div className={styles.text}>
          {/* Informations */}
          <div className={styles.group}>
            <p className={styles.field}>Name</p>
            <p className={styles.details}>{Details.full_name}</p>
          </div>
          <div className={styles.group}>
            <p className={styles.field}>Employee ID</p>
            <p className={styles.details}>{`SG01012022${Details.id}`}</p>
          </div>
          <div className={styles.group}>
            <p className={styles.field}>Job Role</p>
            <p className={styles.details}>HR</p>
          </div>
          <div className={styles.group}>
            <p className={styles.field}>Qualification</p>
            <p className={styles.details}>B.Tech in CST</p>
          </div>
          <div className={styles.group}>
            <p className={styles.field}>Joining Date</p>
            <p className={styles.details}>{Details.date_joined}</p>
          </div>
          <div className={styles.group}>
            <p className={styles.field}>Location</p>
            <p className={styles.details}>Haldia</p>
          </div>
          <div className={styles.group}>
            <p className={styles.field}>Cost To Company</p>
            <p className={styles.details}>Rs. 30,000</p>
          </div>
          <div className={styles.group}>
            <p className={styles.field}>Mobile</p>
            <p className={styles.details}>(+91) 987 654 3210</p>
          </div>
          <div className={styles.group}>
            <p className={styles.field}>Email</p>
            <p className={styles.details}>{Details.email}</p>
          </div>
        </div>
      </div>

      <div className={styles.interview}>
        {
          <>
            {/* Heading */}
            <div className={styles.head}>
              <h2 className={styles.details}>Upcoming Scheduled Interview</h2>
            </div>

            <div className={styles.tableContent}>
              <table className={styles.table}>
                <thead className={styles.tableHead}>
                  <tr className={styles.tableRow}>
                    <th className={styles.details}>ID</th>
                    <th className={styles.details}>Interview title</th>
                    <th className={styles.details}>Candidate ID</th>
                    <th className={styles.details}>Date</th>
                    <th className={styles.details}>Rounds</th>
                    <th className={styles.details}>Job ID</th>
                    <th className={styles.details}>Status</th>
                  </tr>
                </thead>
                {IDetail
                  ? IDetail.map((list) => {
                      const Doptions = {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      };
                      const Toptions = {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                      };
                      let updated_time = new Date(list.updated_at);
                      const date = updated_time.toLocaleDateString(
                        "en-US",
                        Doptions
                      );
                      let time = updated_time.toLocaleString("en-US", Toptions);
                      console.log(date, time);
                      return (
                        <>
                          <tbody className={styles.tableBody}>
                            <th className={styles.details}>{list.id}</th>
                            <th className={styles.details}>{list.title}</th>
                            <th className={styles.details}>{list.candidate}</th>
                            <th className={styles.details}>
                              {list.scheduled_datetime}
                            </th>
                            <th className={styles.details}>
                              {list.round1 ? <TiTick /> : <ImCross />}
                            </th>
                            <th className={styles.details}>
                              {list.round2 ? <TiTick /> : <ImCross />}
                            </th>
                            <th className={styles.details}>
                              {list.round3 ? <TiTick /> : <ImCross />}
                            </th>
                            <th className={styles.details}>{list.job}</th>
                            <th className={styles.details}>
                              {list.selected ? "selected" : <ImCross />}
                            </th>
                          </tbody>
                        </>
                      );
                    })
                  : "No meeting Scheduled"}
              </table>
            </div>
          </>
        }
      </div>
    </section>
  );
}
