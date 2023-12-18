import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

const SellerSettings = () => {
  return (
    <Container>
      <Box mt={10}>
        <Paper elevation={3} sx={{ padding: 3, marginBottom: 5 }}>
          <Typography variant="h4" gutterBottom>
            Settings
          </Typography>

          {/* My Profile */}
          <Category title="My Profile">
            <SubCategoryLink to="/settings/my-profile" title="My Profile" />
            <SubCategoryLink to="/settings/reviews" title="Reviews" />
            <SubCategoryLink to="/settings/badges" title="Badges" />
            <SubCategoryLink
              to="/settings/account-details"
              title="Account details"
            />
          </Category>

          {/* Lead Settings */}
          <Category title="Lead Settings">
            <SubCategoryLink to="/settings/my-services" title="My services" />
            <SubCategoryLink to="/settings/my-locations" title="My locations" />
          </Category>

          {/* Communication */}
          <Category title="Communication">
            <SubCategoryLink
              to="/settings/one-click-response"
              title="One-click response"
            />
            <SubCategoryLink
              to="/settings/email-templates"
              title="Email templates"
            />
            <SubCategoryLink
              to="/settings/sms-templates"
              title="SMS templates"
            />
            <SubCategory title="Integrations">
              <SettingItem title="Hubspot">
                <SettingItem title="Automatically sync your purchased leads with your HubSpot CRM" />
              </SettingItem>
              <SettingItem title="Zapier">
                <SettingItem title="Connect Bark with services like Slack, Google Sheets, Mailchimp, etc." />
              </SettingItem>
            </SubCategory>
          </Category>

          {/* Credits & Payments */}
          <Category title="Credits & Payments">
            <SubCategoryLink to="/settings/my-credits" title="My credits" />
            <SubCategoryLink
              to="/settings/invoices-and-billing"
              title="Invoices and billing details"
            />
            <SubCategoryLink
              to="/settings/my-payment-details"
              title="My payment details"
            />
          </Category>

          {/* Notifications */}
          <Category title="Notifications">
            <SubCategoryLink to="/settings/email-notifications" title="Email" />
            <SubCategoryLink
              to="/settings/browser-notifications"
              title="Browser"
            />
          </Category>
        </Paper>
      </Box>
    </Container>
  );
};

const Category = ({ title, children }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      {children}
      <Divider sx={{ my: 2 }} />
    </div>
  );
};

const SubCategory = ({ title, children }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {children}
    </div>
  );
};

const SettingItem = ({ title }) => {
  return (
    <List>
      <ListItem sx={{ padding: 0 }}>
        <ListItemText primary={title} />
      </ListItem>
    </List>
  );
};

const SubCategoryLink = ({ to, title }) => {
  return (
    <SubCategory title={<Link to={to}>{title}</Link>}>
      <SettingItem title={`Details for ${title}`} />
    </SubCategory>
  );
};

export default SellerSettings;
