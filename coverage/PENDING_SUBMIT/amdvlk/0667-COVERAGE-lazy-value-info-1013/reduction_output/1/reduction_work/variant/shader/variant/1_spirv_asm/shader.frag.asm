; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 151
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %131
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %12 "a"
               OpName %15 "buf0"
               OpMemberName %15 0 "_GLF_uniform_uint_values"
               OpName %17 ""
               OpName %25 "arr"
               OpName %28 "buf2"
               OpMemberName %28 0 "_GLF_uniform_float_values"
               OpName %30 ""
               OpName %66 "i"
               OpName %69 "buf1"
               OpMemberName %69 0 "_GLF_uniform_int_values"
               OpName %71 ""
               OpName %101 "ResType"
               OpName %106 "indexable"
               OpName %131 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 0
               OpDecorate %27 ArrayStride 16
               OpMemberDecorate %28 0 Offset 0
               OpDecorate %28 Block
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 2
               OpDecorate %68 ArrayStride 16
               OpMemberDecorate %69 0 Offset 0
               OpDecorate %69 Block
               OpDecorate %71 DescriptorSet 0
               OpDecorate %71 Binding 1
               OpDecorate %131 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeInt 32 0
         %11 = OpTypePointer Function %10
         %13 = OpConstant %10 1
         %14 = OpTypeArray %10 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpTypePointer Uniform %10
         %21 = OpTypeFloat 32
         %22 = OpConstant %10 16
         %23 = OpTypeArray %21 %22
         %24 = OpTypePointer Function %23
         %26 = OpConstant %10 5
         %27 = OpTypeArray %21 %26
         %28 = OpTypeStruct %27
         %29 = OpTypePointer Uniform %28
         %30 = OpVariable %29 Uniform
         %31 = OpTypePointer Uniform %21
         %65 = OpTypePointer Function %6
         %67 = OpConstant %10 3
         %68 = OpTypeArray %6 %67
         %69 = OpTypeStruct %68
         %70 = OpTypePointer Uniform %69
         %71 = OpVariable %70 Uniform
         %72 = OpTypePointer Uniform %6
         %80 = OpConstant %6 1
         %82 = OpConstant %6 15
         %88 = OpConstant %6 2
         %91 = OpConstant %6 3
         %94 = OpConstant %6 4
        %101 = OpTypeStruct %10 %10
        %105 = OpTypePointer Function %27
        %107 = OpTypePointer Function %21
        %117 = OpTypeBool
        %129 = OpTypeVector %21 4
        %130 = OpTypePointer Output %129
        %131 = OpVariable %130 Output
        %150 = OpConstant %6 10
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %12 = OpVariable %11 Function
         %25 = OpVariable %24 Function
         %66 = OpVariable %65 Function
        %106 = OpVariable %105 Function
               OpStore %8 %9
         %19 = OpAccessChain %18 %17 %9 %9
         %20 = OpLoad %10 %19
               OpStore %12 %20
         %32 = OpAccessChain %31 %30 %9 %9
         %33 = OpLoad %21 %32
         %34 = OpAccessChain %31 %30 %9 %9
         %35 = OpLoad %21 %34
         %36 = OpAccessChain %31 %30 %9 %9
         %37 = OpLoad %21 %36
         %38 = OpAccessChain %31 %30 %9 %9
         %39 = OpLoad %21 %38
         %40 = OpAccessChain %31 %30 %9 %9
         %41 = OpLoad %21 %40
         %42 = OpAccessChain %31 %30 %9 %9
         %43 = OpLoad %21 %42
         %44 = OpAccessChain %31 %30 %9 %9
         %45 = OpLoad %21 %44
         %46 = OpAccessChain %31 %30 %9 %9
         %47 = OpLoad %21 %46
         %48 = OpAccessChain %31 %30 %9 %9
         %49 = OpLoad %21 %48
         %50 = OpAccessChain %31 %30 %9 %9
         %51 = OpLoad %21 %50
         %52 = OpAccessChain %31 %30 %9 %9
         %53 = OpLoad %21 %52
         %54 = OpAccessChain %31 %30 %9 %9
         %55 = OpLoad %21 %54
         %56 = OpAccessChain %31 %30 %9 %9
         %57 = OpLoad %21 %56
         %58 = OpAccessChain %31 %30 %9 %9
         %59 = OpLoad %21 %58
         %60 = OpAccessChain %31 %30 %9 %9
         %61 = OpLoad %21 %60
         %62 = OpAccessChain %31 %30 %9 %9
         %63 = OpLoad %21 %62
         %64 = OpCompositeConstruct %23 %33 %35 %37 %39 %41 %43 %45 %47 %49 %51 %53 %55 %57 %59 %61 %63
               OpStore %25 %64
         %73 = OpAccessChain %72 %71 %9 %9
         %74 = OpLoad %6 %73
               OpStore %66 %74
               OpBranch %75
         %75 = OpLabel
               OpLoopMerge %77 %78 None
               OpBranch %76
         %76 = OpLabel
         %79 = OpLoad %6 %66
         %81 = OpIAdd %6 %79 %80
               OpStore %66 %81
         %83 = OpExtInst %6 %1 SClamp %79 %9 %82
         %84 = OpAccessChain %31 %30 %9 %9
         %85 = OpLoad %21 %84
         %86 = OpAccessChain %31 %30 %9 %80
         %87 = OpLoad %21 %86
         %89 = OpAccessChain %31 %30 %9 %88
         %90 = OpLoad %21 %89
         %92 = OpAccessChain %31 %30 %9 %91
         %93 = OpLoad %21 %92
         %95 = OpAccessChain %31 %30 %9 %94
         %96 = OpLoad %21 %95
         %97 = OpCompositeConstruct %27 %85 %87 %90 %93 %96
         %98 = OpLoad %10 %12
         %99 = OpAccessChain %18 %17 %9 %9
        %100 = OpLoad %10 %99
        %102 = OpISubBorrow %101 %98 %100
        %103 = OpCompositeExtract %10 %102 1
               OpStore %12 %103
        %104 = OpCompositeExtract %10 %102 0
               OpStore %106 %97
        %108 = OpAccessChain %107 %106 %104
        %109 = OpLoad %21 %108
        %110 = OpAccessChain %107 %25 %83
        %111 = OpLoad %21 %110
        %112 = OpFAdd %21 %111 %109
        %113 = OpAccessChain %107 %25 %83
               OpStore %113 %112
               OpBranch %78
         %78 = OpLabel
        %114 = OpLoad %6 %66
        %115 = OpAccessChain %72 %71 %9 %88
        %116 = OpLoad %6 %115
        %118 = OpSLessThan %117 %114 %116
               OpBranchConditional %118 %75 %77
         %77 = OpLabel
        %119 = OpAccessChain %72 %71 %9 %9
        %120 = OpLoad %6 %119
        %121 = OpExtInst %6 %1 SClamp %120 %9 %82
        %122 = OpAccessChain %107 %25 %121
        %123 = OpLoad %21 %122
        %124 = OpAccessChain %31 %30 %9 %80
        %125 = OpLoad %21 %124
        %126 = OpFOrdEqual %117 %123 %125
               OpSelectionMerge %128 None
               OpBranchConditional %126 %127 %145
        %127 = OpLabel
        %132 = OpAccessChain %72 %71 %9 %9
        %133 = OpLoad %6 %132
        %134 = OpConvertSToF %21 %133
        %135 = OpAccessChain %72 %71 %9 %80
        %136 = OpLoad %6 %135
        %137 = OpConvertSToF %21 %136
        %138 = OpAccessChain %72 %71 %9 %80
        %139 = OpLoad %6 %138
        %140 = OpConvertSToF %21 %139
        %141 = OpAccessChain %72 %71 %9 %9
        %142 = OpLoad %6 %141
        %143 = OpConvertSToF %21 %142
        %144 = OpCompositeConstruct %129 %134 %137 %140 %143
               OpStore %131 %144
               OpBranch %128
        %145 = OpLabel
        %146 = OpAccessChain %72 %71 %9 %80
        %147 = OpLoad %6 %146
        %148 = OpConvertSToF %21 %147
        %149 = OpCompositeConstruct %129 %148 %148 %148 %148
               OpStore %131 %149
               OpBranch %128
        %128 = OpLabel
               OpReturn
               OpFunctionEnd
