import { ViewProps } from 'react-native';
import { Container, Title } from './styles';

interface DashboardProps extends ViewProps {}

export function Dashboard({ ...rest }: DashboardProps) {
	return (
		<Container {...rest}>
			<Title>Dashboard</Title>
		</Container>
	);
}
