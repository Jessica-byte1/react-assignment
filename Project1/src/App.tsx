import React, { Component } from "react";

interface IEmp {
  fname: string;
  lname: string;
}

interface IState {
  emp: IEmp;
  emps: IEmp[];
  error: string;
}

class Basic1 extends Component<{}, IState> {
  state: IState = {
    emp: { fname: "", lname: "" },
    emps: [],
    error: "",
  };

  OnTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    this.setState({
      emp: { ...this.state.emp, [name]: value },
    });
  };

  Add = () => {
    const { fname, lname } = this.state.emp;

    if (!fname && !lname) {
      this.setState({ error: "First Name and Last Name are required" });
      return;
    }

    if (!fname) {
      this.setState({ error: "First Name is required" });
      return;
    }

    if (!lname) {
      this.setState({ error: "Last Name is required" });
      return;
    }

    this.setState((prevState) => ({
      emps: [...prevState.emps, prevState.emp],
      emp: { fname: "", lname: "" },
      error: "",
    }));
  };

  Remove = (index: number) => {
    const updated = [...this.state.emps];
    updated.splice(index, 1);
    this.setState({ emps: updated });
  };

  Edit = (index: number) => {
    const updated = [...this.state.emps];
    const selected = updated[index];
    updated.splice(index, 1);

    this.setState({
      emp: selected,
      emps: updated,
    });
  };

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Employee Form</h2>

          <label style={styles.label}>First Name</label>
          <input
            type="text"
            name="fname"
            value={this.state.emp.fname}
            onChange={this.OnTextChange}
            style={styles.input}
          />

          <label style={styles.label}>Last Name</label>
          <input
            type="text"
            name="lname"
            value={this.state.emp.lname}
            onChange={this.OnTextChange}
            style={styles.input}
          />

          <button style={styles.addBtn} onClick={this.Add}>
            Add Employee
          </button>

          {this.state.error && (
            <div style={styles.error}>{this.state.error}</div>
          )}
        </div>

        {this.state.emps.length > 0 && (
          <div style={styles.tableCard}>
            <h2 style={styles.heading}>Employees List</h2>

            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>First Name</th>
                  <th style={styles.th}>Last Name</th>
                  <th style={styles.th}>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.emps.map((e, index) => (
                  <tr key={index}>
                    <td style={styles.td}>{e.fname}</td>
                    <td style={styles.td}>{e.lname}</td>
                    <td style={styles.td}>
                      <button
                        style={styles.editBtn}
                        onClick={() => this.Edit(index)}
                      >
                        Edit
                      </button>
                      <button
                        style={styles.removeBtn}
                        onClick={() => this.Remove(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

const styles: any = {
  container: {
    fontFamily: "Arial",
    backgroundColor: "#f4f6f9",
    minHeight: "100vh",
    padding: "40px",
  },
  card: {
    maxWidth: "400px",
    margin: "auto",
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  tableCard: {
    maxWidth: "700px",
    margin: "40px auto",
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "15px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  addBtn: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  editBtn: {
    padding: "6px 10px",
    marginRight: "5px",
    backgroundColor: "#2196F3",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  removeBtn: {
    padding: "6px 10px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    marginTop: "10px",
    color: "red",
    textAlign: "center",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    backgroundColor: "#f2f2f2",
    padding: "10px",
    border: "1px solid #ddd",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "center",
  },
};

export default Basic1;