; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 118
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %99
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %42 "v"
               OpName %47 "a"
               OpName %99 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %99 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 10
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 3
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %6 0
         %18 = OpTypePointer Uniform %6
         %40 = OpTypeVector %6 2
         %41 = OpTypePointer Function %40
         %46 = OpTypePointer Function %6
         %48 = OpConstant %6 1
         %55 = OpTypeBool
         %61 = OpConstant %6 -5
         %69 = OpConstant %7 0
         %72 = OpConstant %7 1
         %76 = OpConstant %6 2
         %96 = OpTypeFloat 32
         %97 = OpTypeVector %96 4
         %98 = OpTypePointer Output %97
         %99 = OpVariable %98 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %42 = OpVariable %41 Function
         %47 = OpVariable %46 Function
         %19 = OpAccessChain %18 %16 %17 %17
         %20 = OpLoad %6 %19
         %21 = OpAccessChain %18 %16 %17 %17
         %22 = OpLoad %6 %21
         %23 = OpAccessChain %18 %16 %17 %17
         %24 = OpLoad %6 %23
         %25 = OpAccessChain %18 %16 %17 %17
         %26 = OpLoad %6 %25
         %27 = OpAccessChain %18 %16 %17 %17
         %28 = OpLoad %6 %27
         %29 = OpAccessChain %18 %16 %17 %17
         %30 = OpLoad %6 %29
         %31 = OpAccessChain %18 %16 %17 %17
         %32 = OpLoad %6 %31
         %33 = OpAccessChain %18 %16 %17 %17
         %34 = OpLoad %6 %33
         %35 = OpAccessChain %18 %16 %17 %17
         %36 = OpLoad %6 %35
         %37 = OpAccessChain %18 %16 %17 %17
         %38 = OpLoad %6 %37
         %39 = OpCompositeConstruct %9 %20 %22 %24 %26 %28 %30 %32 %34 %36 %38
               OpStore %11 %39
         %43 = OpAccessChain %18 %16 %17 %17
         %44 = OpLoad %6 %43
         %45 = OpCompositeConstruct %40 %44 %44
               OpStore %42 %45
               OpStore %47 %48
         %49 = OpAccessChain %18 %16 %17 %17
         %50 = OpLoad %6 %49
         %51 = OpAccessChain %46 %11 %50
         %52 = OpLoad %6 %51
         %53 = OpAccessChain %18 %16 %17 %17
         %54 = OpLoad %6 %53
         %56 = OpIEqual %55 %52 %54
               OpSelectionMerge %58 None
               OpBranchConditional %56 %57 %58
         %57 = OpLabel
         %59 = OpLoad %6 %47
         %60 = OpIAdd %6 %59 %48
               OpStore %47 %60
               OpBranch %58
         %58 = OpLabel
         %62 = OpLoad %6 %47
         %63 = OpSMod %6 %61 %62
         %64 = OpAccessChain %18 %16 %17 %17
         %65 = OpLoad %6 %64
         %66 = OpSGreaterThanEqual %55 %63 %65
               OpSelectionMerge %68 None
               OpBranchConditional %66 %67 %68
         %67 = OpLabel
         %70 = OpAccessChain %46 %42 %69
         %71 = OpLoad %6 %70
         %73 = OpAccessChain %46 %42 %72
         %74 = OpLoad %6 %73
         %75 = OpIAdd %6 %71 %74
         %77 = OpAccessChain %18 %16 %17 %76
         %78 = OpLoad %6 %77
         %79 = OpAccessChain %46 %11 %75
               OpStore %79 %78
               OpBranch %68
         %68 = OpLabel
         %80 = OpLoad %6 %47
         %81 = OpAccessChain %18 %16 %17 %76
         %82 = OpLoad %6 %81
         %83 = OpIEqual %55 %80 %82
               OpSelectionMerge %85 None
               OpBranchConditional %83 %84 %85
         %84 = OpLabel
         %86 = OpAccessChain %18 %16 %17 %76
         %87 = OpLoad %6 %86
         %88 = OpAccessChain %46 %11 %87
         %89 = OpLoad %6 %88
         %90 = OpAccessChain %18 %16 %17 %76
         %91 = OpLoad %6 %90
         %92 = OpIEqual %55 %89 %91
               OpBranch %85
         %85 = OpLabel
         %93 = OpPhi %55 %83 %68 %92 %84
               OpSelectionMerge %95 None
               OpBranchConditional %93 %94 %113
         %94 = OpLabel
        %100 = OpAccessChain %18 %16 %17 %17
        %101 = OpLoad %6 %100
        %102 = OpConvertSToF %96 %101
        %103 = OpAccessChain %18 %16 %17 %48
        %104 = OpLoad %6 %103
        %105 = OpConvertSToF %96 %104
        %106 = OpAccessChain %18 %16 %17 %48
        %107 = OpLoad %6 %106
        %108 = OpConvertSToF %96 %107
        %109 = OpAccessChain %18 %16 %17 %17
        %110 = OpLoad %6 %109
        %111 = OpConvertSToF %96 %110
        %112 = OpCompositeConstruct %97 %102 %105 %108 %111
               OpStore %99 %112
               OpBranch %95
        %113 = OpLabel
        %114 = OpAccessChain %18 %16 %17 %48
        %115 = OpLoad %6 %114
        %116 = OpConvertSToF %96 %115
        %117 = OpCompositeConstruct %97 %116 %116 %116 %116
               OpStore %99 %117
               OpBranch %95
         %95 = OpLabel
               OpReturn
               OpFunctionEnd
