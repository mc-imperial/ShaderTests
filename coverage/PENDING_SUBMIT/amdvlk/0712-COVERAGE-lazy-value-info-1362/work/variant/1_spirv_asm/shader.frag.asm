; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 131
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %112
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %29 "a"
               OpName %30 "i"
               OpName %40 "b"
               OpName %112 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %112 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 3
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 6
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %6 0
         %18 = OpConstant %6 2
         %19 = OpTypePointer Uniform %6
         %22 = OpConstant %6 1
         %28 = OpTypePointer Function %6
         %37 = OpConstant %6 5
         %38 = OpTypeBool
         %53 = OpConstant %6 3
        %102 = OpConstant %6 4
        %109 = OpTypeFloat 32
        %110 = OpTypeVector %109 4
        %111 = OpTypePointer Output %110
        %112 = OpVariable %111 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %29 = OpVariable %28 Function
         %30 = OpVariable %28 Function
         %40 = OpVariable %28 Function
         %20 = OpAccessChain %19 %16 %17 %18
         %21 = OpLoad %6 %20
         %23 = OpAccessChain %19 %16 %17 %22
         %24 = OpLoad %6 %23
         %25 = OpAccessChain %19 %16 %17 %17
         %26 = OpLoad %6 %25
         %27 = OpCompositeConstruct %9 %21 %24 %26
               OpStore %11 %27
               OpStore %29 %22
               OpStore %30 %18
               OpBranch %31
         %31 = OpLabel
               OpLoopMerge %33 %34 None
               OpBranch %35
         %35 = OpLabel
         %36 = OpLoad %6 %30
         %39 = OpSLessThan %38 %36 %37
               OpBranchConditional %39 %32 %33
         %32 = OpLabel
         %41 = OpAccessChain %19 %16 %17 %22
         %42 = OpLoad %6 %41
               OpStore %40 %42
               OpBranch %43
         %43 = OpLabel
               OpLoopMerge %45 %46 None
               OpBranch %47
         %47 = OpLabel
         %48 = OpLoad %6 %30
         %49 = OpAccessChain %19 %16 %17 %22
         %50 = OpLoad %6 %49
         %51 = OpSGreaterThan %38 %48 %50
               OpBranchConditional %51 %44 %45
         %44 = OpLabel
         %52 = OpLoad %6 %40
         %54 = OpAccessChain %19 %16 %17 %53
         %55 = OpLoad %6 %54
         %56 = OpSGreaterThanEqual %38 %52 %55
               OpSelectionMerge %58 None
               OpBranchConditional %56 %57 %58
         %57 = OpLabel
               OpBranch %45
         %58 = OpLabel
         %60 = OpLoad %6 %40
         %61 = OpIAdd %6 %60 %22
               OpStore %40 %61
         %62 = OpLoad %6 %29
               OpSelectionMerge %65 None
               OpSwitch %62 %65 1 %63 2 %64
         %63 = OpLabel
         %66 = OpLoad %6 %29
         %67 = OpAccessChain %28 %11 %66
         %68 = OpLoad %6 %67
         %69 = OpIAdd %6 %68 %22
               OpStore %67 %69
               OpBranch %64
         %64 = OpLabel
         %70 = OpLoad %6 %29
         %71 = OpAccessChain %28 %11 %70
         %72 = OpLoad %6 %71
         %73 = OpIAdd %6 %72 %22
               OpStore %71 %73
               OpBranch %65
         %65 = OpLabel
               OpBranch %46
         %46 = OpLabel
               OpBranch %43
         %45 = OpLabel
         %75 = OpLoad %6 %29
         %76 = OpIAdd %6 %75 %22
               OpStore %29 %76
               OpBranch %34
         %34 = OpLabel
         %77 = OpLoad %6 %30
         %78 = OpIAdd %6 %77 %22
               OpStore %30 %78
               OpBranch %31
         %33 = OpLabel
         %79 = OpAccessChain %19 %16 %17 %18
         %80 = OpLoad %6 %79
         %81 = OpAccessChain %28 %11 %80
         %82 = OpLoad %6 %81
         %83 = OpAccessChain %19 %16 %17 %18
         %84 = OpLoad %6 %83
         %85 = OpIEqual %38 %82 %84
               OpSelectionMerge %87 None
               OpBranchConditional %85 %86 %87
         %86 = OpLabel
         %88 = OpAccessChain %19 %16 %17 %22
         %89 = OpLoad %6 %88
         %90 = OpAccessChain %28 %11 %89
         %91 = OpLoad %6 %90
         %92 = OpAccessChain %19 %16 %17 %37
         %93 = OpLoad %6 %92
         %94 = OpIEqual %38 %91 %93
               OpBranch %87
         %87 = OpLabel
         %95 = OpPhi %38 %85 %33 %94 %86
               OpSelectionMerge %97 None
               OpBranchConditional %95 %96 %97
         %96 = OpLabel
         %98 = OpAccessChain %19 %16 %17 %17
         %99 = OpLoad %6 %98
        %100 = OpAccessChain %28 %11 %99
        %101 = OpLoad %6 %100
        %103 = OpAccessChain %19 %16 %17 %102
        %104 = OpLoad %6 %103
        %105 = OpIEqual %38 %101 %104
               OpBranch %97
         %97 = OpLabel
        %106 = OpPhi %38 %95 %87 %105 %96
               OpSelectionMerge %108 None
               OpBranchConditional %106 %107 %126
        %107 = OpLabel
        %113 = OpAccessChain %19 %16 %17 %22
        %114 = OpLoad %6 %113
        %115 = OpConvertSToF %109 %114
        %116 = OpAccessChain %19 %16 %17 %18
        %117 = OpLoad %6 %116
        %118 = OpConvertSToF %109 %117
        %119 = OpAccessChain %19 %16 %17 %18
        %120 = OpLoad %6 %119
        %121 = OpConvertSToF %109 %120
        %122 = OpAccessChain %19 %16 %17 %22
        %123 = OpLoad %6 %122
        %124 = OpConvertSToF %109 %123
        %125 = OpCompositeConstruct %110 %115 %118 %121 %124
               OpStore %112 %125
               OpBranch %108
        %126 = OpLabel
        %127 = OpAccessChain %19 %16 %17 %18
        %128 = OpLoad %6 %127
        %129 = OpConvertSToF %109 %128
        %130 = OpCompositeConstruct %110 %129 %129 %129 %129
               OpStore %112 %130
               OpBranch %108
        %108 = OpLabel
               OpReturn
               OpFunctionEnd
