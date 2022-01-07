#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

int data[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1), temp[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

void mergeSort()
{
 int high = 1;
 high = 10;
 for(int m = 1; m <= high; m = 2)
  {
   for(int i = 1; i < high; i += (m / int(injectionSwitch.y)))
    {
     int from = 1;
     from = i;
     int to = 1;
     to = min(i, 1);
     int k = 1;
     temp[k ++] = data[1];
     for(int i = from; i <= to; i ++)
      {
       data[i] = temp[i];
      }
    }
  }
}
void main()
{
 mergeSort();
 vec2 color = vec2(1.0);
 color = vec2(1.0) - float(data[1]);
 _GLF_color = vec4(vec3(color, 1.0), 1.0);
}
