using System;
using System.IO;
using System.Linq;
using System.Windows.Forms;
using Microsoft.Office.Core;
using Microsoft.Office.Interop.Excel;
using TheBall.Support.DeviceClient;
using Application = Microsoft.Office.Interop.Excel.Application;

namespace OfficeAddInDemo
{
    internal static class CommandHandler
    {
        public static void ExecuteCommand_DemoCommand(IRibbonControl activatedControl)
        {
            var window = (Window) activatedControl.Context;
            var app = window.Application;
            ClientExecute.ExecuteWithSettings(userSettings =>
            {
                string connName = "Office Add-in Test";
                var existingConnection = userSettings.Connections.Any(conn => conn.Name == connName);
                if (!existingConnection)
                {
                    ClientExecute.CreateConnection("devdev.theball.me", "3a18a3ed-6db1-4fcd-96d8-f51a117e2175", connName);
                }
                else
                {
                    string localPersonalPath = @"c:\Demo\Excel";
                    string stage = System.IO.Path.Combine(localPersonalPath, "STAGE");
                    string stageData = System.IO.Path.Combine(stage, "AaltoGlobalImpact.OIP");
                    string devData = System.IO.Path.Combine(stage, "DEV_officeup");
                    string myDevDataHello = System.IO.Path.Combine(devData, "HelloFromExcel.txt");
                    string myExcelDataHello = System.IO.Path.Combine(devData, "HelloFromExcel.xlsx");
                    if (Directory.Exists(stageData) == false)
                        Directory.CreateDirectory(stageData);
                    var myStagedStuff = Directory.GetFiles(stage, "*", SearchOption.AllDirectories);
                    if (Directory.Exists(devData) == false)
                        Directory.CreateDirectory(devData);
                    //File.WriteAllText(myDevDataHello, "Hello from Office: " + DateTime.UtcNow.ToString());
                    app.ActiveWorkbook.SaveCopyAs(myExcelDataHello);
                    var staging = ClientExecute.SetStaging(connName, stage, "AaltoGlobalImpact.OIP");
                    ClientExecute.StageOperation(connName, true, true, false);
                    var myStagedSTuff = Directory.GetFiles(stage, "*", SearchOption.AllDirectories);
                }
            }, null);

        }
    }
}