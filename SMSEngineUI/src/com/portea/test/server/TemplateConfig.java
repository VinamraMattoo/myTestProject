package com.portea.test.server;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class TemplateConfig
 */
@WebServlet("/TemplateConfig")
public class TemplateConfig extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public TemplateConfig() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub

		StringBuilder builder = new StringBuilder();
		builder.append("[{\"id\": 1," + " \"name\": \"Sales\"," + "\"desc\": \"description\","
				+ "\"cpContentMatchType\": \"ABSOLUTE_PERIOD\"," + "\"cpContentMatchValue\": 300,"
				+ " \"cpTypeMatchType\": \"CALENDAR_DAY\"," + "\"cpTypeMatchValue\": 2," + "\"expiresIn\": 15," +

		"\"smsGroupVOs\": [{" + "\"id\": 1," + "\"name\": \"Appointment summary\"," + "\"desc\": \"description\","
				+ "\"cpContentMatchType\": \"ABSOLUTE_PERIOD\"," + "\"cpContentMatchValue\": 300,"
				+ "\"cpTypeMatchType\": \"CALENDAR_DAY\"," + "\"cpTypeMatchValue\": 2," + "\"isBulk\": false,"
				+ "\"priority\": 2," + "\"smsTemplateVOs\": [{" + "\"id\": 1," + "\"name\": \"patient_lead_sms\","
				+ "\"retryCount\": 2," + "\"messageExpiry\": 30" + "}," + "{" + "\"id\": 2,"
				+ "\"name\": \"physio_lead_sms\"," + "\"retryCount\": 2," + "\"messageExpiry\": 50" + "}]"

		+ "}," + "{" + "\"id\": 2," + "\"name\": \"Report summary\"," + "\"desc\": \"description\","
				+ "\"cpContentMatchType\": \"ABSOLUTE_PERIOD\"," + "\"cpContentMatchValue\": 300,"
				+ "\"cpTypeMatchType\": \"CALENDAR_DAY\"," + "\"cpTypeMatchValue\": 2," + "\"isBulk\": false,"
				+ "\"priority\": 2," + "\"smsTemplateVOs\": [{" + "\"id\": 1," + "\"name\": \"home_lead_sms\","
				+ "\"retryCount\": 2," + "\"messageExpiry\": 88" + "}," + "{" + "\"id\": 2,"
				+ "\"name\": \"office_lead_sms\"," + "\"retryCount\": 2," + "\"messageExpiry\": 70" + "}]"

		+ "}]" + "}," + "{\"id\": 2," + " \"name\": \"Marketing\"," + "\"desc\": \"description\","
				+ "\"cpContentMatchType\": \"ABSOLUTE_PERIOD\"," + "\"cpContentMatchValue\": 300,"
				+ " \"cpTypeMatchType\": \"CALENDAR_DAY\"," + "\"cpTypeMatchValue\": 2," + "\"expiresIn\": 15," +

		"\"smsGroupVOs\": [{" + "\"id\": 4," + "\"name\": \"Pol summary\"," + "\"desc\": \"description\","
				+ "\"cpContentMatchType\": \"ABSOLUTE_PERIOD\"," + "\"cpContentMatchValue\": 300,"
				+ "\"cpTypeMatchType\": \"CALENDAR_DAY\"," + "\"cpTypeMatchValue\": 2," + "\"isBulk\": false,"
				+ "\"priority\": 2," + "\"smsTemplateVOs\": [{" + "\"id\": 1," + "\"name\": \"Temp_name\","
				+ "\"retryCount\": 2," + "\"messageExpiry\": 30" + "}," + "{" + "\"id\": 2,"
				+ "\"name\": \"temp_lead_sms\"," + "\"retryCount\": 2," + "\"messageExpiry\": 50" + "}] }," + "{"
				+ "\"id\": 5," + "\"name\": \"Req summary\"," + "\"desc\": \"description\","
				+ "\"cpContentMatchType\": \"ABSOLUTE_PERIOD\"," + "\"cpContentMatchValue\": 300,"
				+ "\"cpTypeMatchType\": \"CALENDAR_DAY\"," + "\"cpTypeMatchValue\": 2," + "\"isBulk\": false,"
				+ "\"priority\": 2," + "\"smsTemplateVOs\": [{" + "\"id\": 1," + "\"name\": \"nursing_lead_sms\","
				+ "\"retryCount\": 2," + "\"messageExpiry\": 88" + "}," + "{" + "\"id\": 2,"
				+ "\"name\": \"WFM_lead_sms\"," + "\"retryCount\": 2," + "\"messageExpiry\": 70" + "}]"
		+ "}]" + "}]");
		response.getWriter().append(builder.toString());

	}

}
