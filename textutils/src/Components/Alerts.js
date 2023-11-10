

function Alerts(props) {

    return (
        <div style={{ height: '55px' }}  /*This is CLS property Cumlative layout style*/>
            {props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{props.alert.type}</strong>: {props.alert.msg}
            </div>}
        </div>
    );
}

export default Alerts;