using System;
using System.IO;
using System.Linq;
using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;
using TheBall.Support.DeviceClient;

namespace AndroidApplication4
{
    [Activity(Label = "AndroidApplication4", MainLauncher = true, Icon = "@drawable/icon")]
    public class MainActivity : Activity
    {
        int count = 1;

        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);

            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.Main);

            // Get our button from the layout resource,
            // and attach an event to it
            Button button = FindViewById<Button>(Resource.Id.MyButton);

            button.Click += delegate
            {
                ClientExecute.ExecuteWithSettings(userSettings =>
                {
                    string connName = "Android Xamarin Test";
                    var existingConnection = userSettings.Connections.Any(conn => conn.Name == connName);
                    if (!existingConnection)
                    {
                        ClientExecute.CreateConnection("devdev.theball.me", "3a18a3ed-6db1-4fcd-96d8-f51a117e2175", connName);
                    }
                    else
                    {
                        string localPersonalPath = System.Environment.GetFolderPath(System.Environment.SpecialFolder.Personal);
                        string stage = System.IO.Path.Combine(localPersonalPath, "STAGE");
                        string stageData = System.IO.Path.Combine(stage, "AaltoGlobalImpact.OIP");
                        string devData = System.IO.Path.Combine(stage, "DEV_XamAndroid");
                        string myDevDataHello = System.IO.Path.Combine(devData, "HelloFromAndroid.txt");
                        var myPersonalStuff = Directory.GetFiles(localPersonalPath, "*", SearchOption.AllDirectories);
                        if (Directory.Exists(stageData) == false)
                            Directory.CreateDirectory(stageData);
                        if (Directory.Exists(devData) == false)
                            Directory.CreateDirectory(devData);
                        File.WriteAllText(myDevDataHello, "Hello from Android: " + DateTime.UtcNow.ToString());
                        var staging = ClientExecute.SetStaging(connName, stage, "AaltoGlobalImpact.OIP");
                        ClientExecute.StageOperation(connName, true, true, false);
                        var myStagedSTuff = Directory.GetFiles(stage, "*", SearchOption.AllDirectories);
                    }
                }, null);
                button.Text = string.Format("{0} clicks!", count++);
            };
        }
    }
}

