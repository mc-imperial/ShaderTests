; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 159
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %30
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "A"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_float_values"
               OpName %16 ""
               OpName %30 "_GLF_color"
               OpName %42 "i"
               OpName %50 "buf2"
               OpMemberName %50 0 "injectionSwitch"
               OpName %52 ""
               OpName %62 "j"
               OpName %82 "buf1"
               OpMemberName %82 0 "_GLF_uniform_int_values"
               OpName %84 ""
               OpName %101 "indexable"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %30 Location 0
               OpMemberDecorate %50 0 Offset 0
               OpDecorate %50 Block
               OpDecorate %52 DescriptorSet 0
               OpDecorate %52 Binding 2
               OpDecorate %81 ArrayStride 16
               OpMemberDecorate %82 0 Offset 0
               OpDecorate %82 Block
               OpDecorate %84 DescriptorSet 0
               OpDecorate %84 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 3
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 4
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpTypeInt 32 1
         %18 = OpConstant %17 0
         %19 = OpConstant %17 1
         %20 = OpTypePointer Uniform %6
         %28 = OpTypeVector %6 4
         %29 = OpTypePointer Output %28
         %30 = OpVariable %29 Output
         %31 = OpConstant %17 2
         %41 = OpTypePointer Function %17
         %43 = OpConstant %17 -1
         %49 = OpTypeVector %6 2
         %50 = OpTypeStruct %49
         %51 = OpTypePointer Uniform %50
         %52 = OpVariable %51 Uniform
         %53 = OpConstant %7 0
         %57 = OpTypeBool
         %63 = OpConstant %7 1
         %81 = OpTypeArray %17 %12
         %82 = OpTypeStruct %81
         %83 = OpTypePointer Uniform %82
         %84 = OpVariable %83 Uniform
         %85 = OpTypePointer Uniform %17
        %102 = OpTypePointer Function %6
        %114 = OpConstant %17 50
        %120 = OpConstant %17 3
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %42 = OpVariable %41 Function
         %62 = OpVariable %41 Function
        %101 = OpVariable %10 Function
         %21 = OpAccessChain %20 %16 %18 %19
         %22 = OpLoad %6 %21
         %23 = OpAccessChain %20 %16 %18 %19
         %24 = OpLoad %6 %23
         %25 = OpAccessChain %20 %16 %18 %19
         %26 = OpLoad %6 %25
         %27 = OpCompositeConstruct %9 %22 %24 %26
               OpStore %11 %27
         %32 = OpAccessChain %20 %16 %18 %31
         %33 = OpLoad %6 %32
         %34 = OpAccessChain %20 %16 %18 %19
         %35 = OpLoad %6 %34
         %36 = OpAccessChain %20 %16 %18 %19
         %37 = OpLoad %6 %36
         %38 = OpAccessChain %20 %16 %18 %19
         %39 = OpLoad %6 %38
         %40 = OpCompositeConstruct %28 %33 %35 %37 %39
               OpStore %30 %40
               OpStore %42 %43
               OpBranch %44
         %44 = OpLabel
               OpLoopMerge %46 %47 None
               OpBranch %45
         %45 = OpLabel
         %48 = OpLoad %17 %42
         %54 = OpAccessChain %20 %52 %18 %53
         %55 = OpLoad %6 %54
         %56 = OpConvertFToS %17 %55
         %58 = OpSGreaterThan %57 %48 %56
               OpSelectionMerge %60 None
               OpBranchConditional %58 %59 %60
         %59 = OpLabel
               OpBranch %46
         %60 = OpLabel
         %64 = OpAccessChain %20 %52 %18 %63
         %65 = OpLoad %6 %64
         %66 = OpConvertFToS %17 %65
               OpStore %62 %66
               OpBranch %67
         %67 = OpLabel
               OpLoopMerge %69 %70 None
               OpBranch %71
         %71 = OpLabel
         %72 = OpLoad %17 %62
         %73 = OpSGreaterThan %57 %72 %18
               OpBranchConditional %73 %68 %69
         %68 = OpLabel
         %74 = OpAccessChain %20 %52 %18 %63
         %75 = OpLoad %6 %74
         %76 = OpAccessChain %20 %16 %18 %18
         %77 = OpLoad %6 %76
         %78 = OpFOrdGreaterThan %57 %75 %77
               OpSelectionMerge %80 None
               OpBranchConditional %78 %79 %80
         %79 = OpLabel
         %86 = OpAccessChain %85 %84 %18 %18
         %87 = OpLoad %17 %86
         %88 = OpConvertSToF %6 %87
         %89 = OpCompositeConstruct %28 %88 %88 %88 %88
               OpStore %30 %89
               OpBranch %80
         %80 = OpLabel
         %90 = OpLoad %17 %42
         %91 = OpExtInst %17 %1 SClamp %90 %18 %31
         %92 = OpAccessChain %20 %16 %18 %19
         %93 = OpLoad %6 %92
         %94 = OpAccessChain %20 %16 %18 %19
         %95 = OpLoad %6 %94
         %96 = OpAccessChain %20 %16 %18 %19
         %97 = OpLoad %6 %96
         %98 = OpCompositeConstruct %9 %93 %95 %97
         %99 = OpLoad %17 %42
        %100 = OpExtInst %17 %1 SClamp %99 %18 %31
               OpStore %101 %98
        %103 = OpAccessChain %102 %101 %100
        %104 = OpLoad %6 %103
        %105 = OpAccessChain %102 %11 %91
        %106 = OpLoad %6 %105
        %107 = OpFAdd %6 %106 %104
        %108 = OpAccessChain %102 %11 %91
               OpStore %108 %107
               OpBranch %70
         %70 = OpLabel
        %109 = OpLoad %17 %62
        %110 = OpISub %17 %109 %19
               OpStore %62 %110
               OpBranch %67
         %69 = OpLabel
        %111 = OpLoad %17 %42
        %112 = OpIAdd %17 %111 %19
               OpStore %42 %112
               OpBranch %47
         %47 = OpLabel
        %113 = OpLoad %17 %42
        %115 = OpSLessThan %57 %113 %114
               OpBranchConditional %115 %44 %46
         %46 = OpLabel
        %116 = OpAccessChain %85 %84 %18 %18
        %117 = OpLoad %17 %116
        %118 = OpAccessChain %102 %11 %117
        %119 = OpLoad %6 %118
        %121 = OpAccessChain %20 %16 %18 %120
        %122 = OpLoad %6 %121
        %123 = OpFOrdEqual %57 %119 %122
               OpSelectionMerge %125 None
               OpBranchConditional %123 %124 %125
        %124 = OpLabel
        %126 = OpAccessChain %85 %84 %18 %19
        %127 = OpLoad %17 %126
        %128 = OpAccessChain %102 %11 %127
        %129 = OpLoad %6 %128
        %130 = OpAccessChain %20 %16 %18 %19
        %131 = OpLoad %6 %130
        %132 = OpFOrdEqual %57 %129 %131
               OpBranch %125
        %125 = OpLabel
        %133 = OpPhi %57 %123 %46 %132 %124
               OpSelectionMerge %135 None
               OpBranchConditional %133 %134 %135
        %134 = OpLabel
        %136 = OpAccessChain %85 %84 %18 %120
        %137 = OpLoad %17 %136
        %138 = OpAccessChain %102 %11 %137
        %139 = OpLoad %6 %138
        %140 = OpAccessChain %20 %16 %18 %19
        %141 = OpLoad %6 %140
        %142 = OpFOrdEqual %57 %139 %141
               OpBranch %135
        %135 = OpLabel
        %143 = OpPhi %57 %133 %125 %142 %134
               OpSelectionMerge %145 None
               OpBranchConditional %143 %144 %145
        %144 = OpLabel
        %146 = OpAccessChain %85 %84 %18 %19
        %147 = OpLoad %17 %146
        %148 = OpConvertSToF %6 %147
        %149 = OpAccessChain %85 %84 %18 %18
        %150 = OpLoad %17 %149
        %151 = OpConvertSToF %6 %150
        %152 = OpAccessChain %85 %84 %18 %18
        %153 = OpLoad %17 %152
        %154 = OpConvertSToF %6 %153
        %155 = OpAccessChain %85 %84 %18 %19
        %156 = OpLoad %17 %155
        %157 = OpConvertSToF %6 %156
        %158 = OpCompositeConstruct %28 %148 %151 %154 %157
               OpStore %30 %158
               OpBranch %145
        %145 = OpLabel
               OpReturn
               OpFunctionEnd
