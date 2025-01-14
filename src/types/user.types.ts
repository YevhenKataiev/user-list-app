export interface IUser {
	id: number,
	name: string,
	username: string,
	email: string,
	address: IAdress,
	phone: string,
	website: string,
	company: ICompany,
}
export interface ISimpleUser {
	id: number,
	name: string,
	username: string,
	email: string,
}
interface IAdress {
	street: string,
	suite: string,
	city: string,
	zipcode: string,
	geo: IGeo,
}
interface IGeo {
	lat: string,
	lng: string,
}
interface ICompany {
	name: string,
	catchPhrase: string,
	bs: string,
}