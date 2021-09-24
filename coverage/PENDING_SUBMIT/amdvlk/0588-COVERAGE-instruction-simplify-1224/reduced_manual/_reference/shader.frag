#version 320 es
precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform buf0 {
 vec2 resolution;
};
struct QuicksortObject {
 int numbers[10];
} ;

QuicksortObject obj;

void swap(int i, int j)
{
 int temp = obj.numbers[i];
 obj.numbers[i] = obj.numbers[j];
 obj.numbers[j] = temp;
}
int performPartition(int l, int h)
{
 int pivot = obj.numbers[h];
 int i = l - 1;
 for(int j = l; j <= h - 1; j ++)
  {
   if(obj.numbers[j] <= pivot)
    {
     i ++;
     swap(i, j);
    }
  }
 i ++;
 swap(i, h);
 return i;
}
void quicksort()
{
 int l = 0, h = 9;
 int stack[10];
 int top = - 1;
 stack[++ top] = l;
 stack[++ top] = h;
 while(top >= 0)
  {
   h = stack[top --];
   l = stack[top --];
   int p = performPartition(l, h);
   if(p - 1 > l)
    {
     stack[++ top] = l;
     stack[++ top] = p - 1;
    }
   if(p + 1 < h)
    {
     stack[++ top] = p + 1;
     stack[++ top] = h;
    }
  }
}
void main()
{
 for(int i = 0; i < 10; i ++)
  {
   obj.numbers[i] = (10 - i);
   obj.numbers[i] = obj.numbers[i] * obj.numbers[i];
  }
 quicksort();
 vec2 uv = gl_FragCoord.xy / resolution;
 vec3 color = vec3(1.0, 2.0, 3.0);
 color.x += float(obj.numbers[0]);
 if(uv.x > (1.0 / 4.0))
  {
   color.x += float(obj.numbers[1]);
  }
 if(uv.x > (2.0 / 4.0))
  {
   color.y += float(obj.numbers[2]);
  }
 if(uv.x > (3.0 / 4.0))
  {
   color.z += float(obj.numbers[3]);
  }
 color.y += float(obj.numbers[4]);
 if(uv.y > (1.0 / 4.0))
  {
   color.x += float(obj.numbers[5]);
  }
 if(uv.y > (2.0 / 4.0))
  {
   color.y += float(obj.numbers[6]);
  }
 if(uv.y > (3.0 / 4.0))
  {
   color.z += float(obj.numbers[7]);
  }
 color.z += float(obj.numbers[8]);
 if(abs(uv.x - uv.y) < 0.25)
  {
   color.x += float(obj.numbers[9]);
  }
 _GLF_color = vec4(normalize(color), 1.0);
}
