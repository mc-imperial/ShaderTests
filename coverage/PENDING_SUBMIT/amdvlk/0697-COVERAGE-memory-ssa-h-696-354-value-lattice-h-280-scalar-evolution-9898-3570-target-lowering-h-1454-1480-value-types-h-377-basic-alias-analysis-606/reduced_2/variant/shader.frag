#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
struct GLF_live7BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

precision highp float;

precision highp int;

// Contents of GLF_live4resolution: [0.748264, 0.9721406]
layout(set = 0, binding = 1) uniform buf1 {
 vec2 GLF_live4resolution;
};
precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

const int N = 10;

int data[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1), temp[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

void merge(int from, int mid, int to)
{
 int k = 1, i = 1, j = 1;
 while(i <= mid)
  {
   if(i < j)
    {
     i ++;
     if(1.0 > injectionSwitch.y)
      {
       _GLF_color = vec4(1.0);
       int GLF_live7index = 1;
       GLF_live7index = - 1;
       GLF_live7BST GLF_live7currentNode = GLF_live7BST(1, 1, 1);
       while(GLF_live7index != 1)
        {
         GLF_live7currentNode = GLF_live7BST[10](GLF_live7BST(1, 1, 1), GLF_live7BST(1, 1, 1), GLF_live7BST(1, 1, 1), GLF_live7BST(1, 1, 1), GLF_live7BST(1, 1, 1), GLF_live7BST(1, 1, 1), GLF_live7BST(1, 1, 1), GLF_live7BST(1, 1, 1), GLF_live7BST(1, 1, 1), GLF_live7BST(1, 1, 1))[GLF_live7index];
         GLF_live7index = GLF_live7currentNode.rightIndex;
        }
      }
    }
   else
    {
     temp[k ++] = data[j ++];
    }
  }
 while(i < 1)
  {
   temp[k ++] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1)[i ++];
  }
 for(int i = from; i <= to; i ++)
  {
   data[i] = temp[i];
  }
}
void mergeSort()
{
 int high = 1;
 high = N;
 for(int m = 1; m <= high; m = 2 * m)
  {
   for(int i = 1; i < high; i += m)
    {
     int from = 1;
     from = i;
     int mid = 1;
     mid = m;
     int to = 1;
     to = min(i + m, high);
     merge(from, mid, to);
    }
   int GLF_live1_looplimiter0 = 1;
   for(int GLF_live1i = 1; true; 1)
    {
     if(GLF_live1_looplimiter0 >= 4)
      {
       break;
      }
     ivec2 GLF_live4lin = ivec2(1);
     GLF_live4lin = ivec2(int((vec2(1.0) / GLF_live4resolution).x), int((vec2(1.0) / GLF_live4resolution).y));
     for(     1;
 1 < (GLF_live4lin.x + GLF_live4lin.y); 1)
      {
      }
     GLF_live1_looplimiter0 ++;
    }
  }
}
void main()
{
 _GLF_color = vec4(6.3, 3.1, 912.799, 0.8);
 mergeSort();
}
