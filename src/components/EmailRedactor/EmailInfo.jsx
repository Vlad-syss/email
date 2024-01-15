const UserInformation = ({ email, data }) => (
	<div>
		<h2>{email ? "To" : "From"}:</h2>
		<img src={data?.avatar} alt="" />
		<p>
			<b>{!email ? data?.user : data?.receive}</b>
		</p>
	</div>
);

export default UserInformation;
