; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 156
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %48 %137
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %12 "buf1"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %24 "m"
               OpName %35 "a"
               OpName %37 "i"
               OpName %48 "gl_FragCoord"
               OpName %64 "j"
               OpName %74 "buf0"
               OpMemberName %74 0 "_GLF_uniform_int_values"
               OpName %76 ""
               OpName %96 "ref"
               OpName %137 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 1
               OpDecorate %48 BuiltIn FragCoord
               OpDecorate %73 ArrayStride 16
               OpMemberDecorate %74 0 Offset 0
               OpDecorate %74 Block
               OpDecorate %76 DescriptorSet 0
               OpDecorate %76 Binding 0
               OpDecorate %137 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 4
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpTypeInt 32 1
         %16 = OpConstant %15 0
         %17 = OpConstant %15 3
         %18 = OpTypePointer Uniform %6
         %21 = OpTypeVector %6 4
         %22 = OpTypeMatrix %21 4
         %23 = OpTypePointer Function %22
         %27 = OpConstant %6 1
         %28 = OpConstant %6 0
         %34 = OpTypePointer Function %15
         %36 = OpConstant %15 1
         %44 = OpConstant %15 4
         %45 = OpTypeBool
         %47 = OpTypePointer Input %21
         %48 = OpVariable %47 Input
         %49 = OpConstant %9 0
         %50 = OpTypePointer Input %6
         %59 = OpConstant %15 5
         %71 = OpConstant %15 6
         %73 = OpTypeArray %15 %10
         %74 = OpTypeStruct %73
         %75 = OpTypePointer Uniform %74
         %76 = OpVariable %75 Uniform
         %77 = OpTypePointer Uniform %15
        %104 = OpConstant %6 -9
        %105 = OpConstant %9 1
        %107 = OpConstant %6 -10
        %108 = OpConstant %9 2
        %110 = OpConstant %9 3
        %116 = OpTypeVector %45 4
        %136 = OpTypePointer Output %21
        %137 = OpVariable %136 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %24 = OpVariable %23 Function
         %35 = OpVariable %34 Function
         %37 = OpVariable %34 Function
         %64 = OpVariable %34 Function
         %96 = OpVariable %23 Function
         %19 = OpAccessChain %18 %14 %16 %17
         %20 = OpLoad %6 %19
               OpStore %8 %20
         %25 = OpAccessChain %18 %14 %16 %16
         %26 = OpLoad %6 %25
         %29 = OpCompositeConstruct %21 %26 %28 %28 %28
         %30 = OpCompositeConstruct %21 %28 %26 %28 %28
         %31 = OpCompositeConstruct %21 %28 %28 %26 %28
         %32 = OpCompositeConstruct %21 %28 %28 %28 %26
         %33 = OpCompositeConstruct %22 %29 %30 %31 %32
               OpStore %24 %33
               OpStore %35 %36
               OpStore %37 %36
               OpBranch %38
         %38 = OpLabel
               OpLoopMerge %40 %41 None
               OpBranch %42
         %42 = OpLabel
         %43 = OpLoad %15 %37
         %46 = OpSLessThan %45 %43 %44
               OpBranchConditional %46 %39 %40
         %39 = OpLabel
         %51 = OpAccessChain %50 %48 %49
         %52 = OpLoad %6 %51
         %53 = OpFOrdLessThan %45 %52 %28
               OpSelectionMerge %55 None
               OpBranchConditional %53 %54 %55
         %54 = OpLabel
               OpBranch %40
         %55 = OpLabel
         %57 = OpLoad %15 %35
         %58 = OpIAdd %15 %57 %36
               OpStore %35 %58
         %60 = OpSGreaterThanEqual %45 %57 %59
               OpSelectionMerge %62 None
               OpBranchConditional %60 %61 %62
         %61 = OpLabel
               OpBranch %40
         %62 = OpLabel
               OpStore %64 %36
               OpBranch %65
         %65 = OpLabel
               OpLoopMerge %67 %68 None
               OpBranch %69
         %69 = OpLabel
         %70 = OpLoad %15 %64
         %72 = OpSLessThan %45 %70 %71
               OpBranchConditional %72 %66 %67
         %66 = OpLabel
         %78 = OpAccessChain %77 %76 %16 %16
         %79 = OpLoad %15 %78
         %80 = OpLoad %15 %37
         %81 = OpAccessChain %77 %76 %16 %16
         %82 = OpLoad %15 %81
         %83 = OpAccessChain %77 %76 %16 %16
         %84 = OpLoad %15 %83
         %85 = OpAccessChain %7 %24 %82 %84
         %86 = OpLoad %6 %85
         %87 = OpLoad %6 %8
         %88 = OpFSub %6 %86 %87
         %89 = OpAccessChain %7 %24 %79 %80
               OpStore %89 %88
               OpBranch %68
         %68 = OpLabel
         %90 = OpLoad %15 %64
         %91 = OpIAdd %15 %90 %36
               OpStore %64 %91
               OpBranch %65
         %67 = OpLabel
         %92 = OpAccessChain %18 %14 %16 %16
         %93 = OpLoad %6 %92
               OpStore %8 %93
               OpBranch %41
         %41 = OpLabel
         %94 = OpLoad %15 %37
         %95 = OpIAdd %15 %94 %36
               OpStore %37 %95
               OpBranch %38
         %40 = OpLabel
         %97 = OpAccessChain %18 %14 %16 %16
         %98 = OpLoad %6 %97
         %99 = OpCompositeConstruct %21 %98 %28 %28 %28
        %100 = OpCompositeConstruct %21 %28 %98 %28 %28
        %101 = OpCompositeConstruct %21 %28 %28 %98 %28
        %102 = OpCompositeConstruct %21 %28 %28 %28 %98
        %103 = OpCompositeConstruct %22 %99 %100 %101 %102
               OpStore %96 %103
        %106 = OpAccessChain %7 %96 %36 %105
               OpStore %106 %104
        %109 = OpAccessChain %7 %96 %36 %108
               OpStore %109 %107
        %111 = OpAccessChain %7 %96 %36 %110
               OpStore %111 %107
        %112 = OpLoad %22 %24
        %113 = OpLoad %22 %96
        %114 = OpCompositeExtract %21 %112 0
        %115 = OpCompositeExtract %21 %113 0
        %117 = OpFOrdEqual %116 %114 %115
        %118 = OpAll %45 %117
        %119 = OpCompositeExtract %21 %112 1
        %120 = OpCompositeExtract %21 %113 1
        %121 = OpFOrdEqual %116 %119 %120
        %122 = OpAll %45 %121
        %123 = OpLogicalAnd %45 %118 %122
        %124 = OpCompositeExtract %21 %112 2
        %125 = OpCompositeExtract %21 %113 2
        %126 = OpFOrdEqual %116 %124 %125
        %127 = OpAll %45 %126
        %128 = OpLogicalAnd %45 %123 %127
        %129 = OpCompositeExtract %21 %112 3
        %130 = OpCompositeExtract %21 %113 3
        %131 = OpFOrdEqual %116 %129 %130
        %132 = OpAll %45 %131
        %133 = OpLogicalAnd %45 %128 %132
               OpSelectionMerge %135 None
               OpBranchConditional %133 %134 %151
        %134 = OpLabel
        %138 = OpAccessChain %77 %76 %16 %16
        %139 = OpLoad %15 %138
        %140 = OpConvertSToF %6 %139
        %141 = OpAccessChain %77 %76 %16 %36
        %142 = OpLoad %15 %141
        %143 = OpConvertSToF %6 %142
        %144 = OpAccessChain %77 %76 %16 %36
        %145 = OpLoad %15 %144
        %146 = OpConvertSToF %6 %145
        %147 = OpAccessChain %77 %76 %16 %16
        %148 = OpLoad %15 %147
        %149 = OpConvertSToF %6 %148
        %150 = OpCompositeConstruct %21 %140 %143 %146 %149
               OpStore %137 %150
               OpBranch %135
        %151 = OpLabel
        %152 = OpAccessChain %77 %76 %16 %36
        %153 = OpLoad %15 %152
        %154 = OpConvertSToF %6 %153
        %155 = OpCompositeConstruct %21 %154 %154 %154 %154
               OpStore %137 %155
               OpBranch %135
        %135 = OpLabel
               OpReturn
               OpFunctionEnd
