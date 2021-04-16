; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 103
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %84
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "sums"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_float_values"
               OpName %16 ""
               OpName %28 "i"
               OpName %36 "buf1"
               OpMemberName %36 0 "_GLF_uniform_int_values"
               OpName %38 ""
               OpName %64 "indexable"
               OpName %84 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %35 ArrayStride 16
               OpMemberDecorate %36 0 Offset 0
               OpDecorate %36 Block
               OpDecorate %38 DescriptorSet 0
               OpDecorate %38 Binding 1
               OpDecorate %84 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 3
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 2
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpTypeInt 32 1
         %18 = OpConstant %17 0
         %19 = OpTypePointer Uniform %6
         %27 = OpTypePointer Function %17
         %35 = OpTypeArray %17 %8
         %36 = OpTypeStruct %35
         %37 = OpTypePointer Uniform %36
         %38 = OpVariable %37 Uniform
         %39 = OpTypePointer Uniform %17
         %44 = OpConstant %17 2
         %46 = OpTypeBool
         %52 = OpTypeVector %6 4
         %53 = OpTypeMatrix %52 2
         %54 = OpConstant %6 1
         %55 = OpConstant %6 0
         %60 = OpConstant %17 1
         %63 = OpTypePointer Function %53
         %65 = OpTypePointer Function %6
         %83 = OpTypePointer Output %52
         %84 = OpVariable %83 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %28 = OpVariable %27 Function
         %64 = OpVariable %63 Function
         %20 = OpAccessChain %19 %16 %18 %18
         %21 = OpLoad %6 %20
         %22 = OpAccessChain %19 %16 %18 %18
         %23 = OpLoad %6 %22
         %24 = OpAccessChain %19 %16 %18 %18
         %25 = OpLoad %6 %24
         %26 = OpCompositeConstruct %9 %21 %23 %25
               OpStore %11 %26
               OpStore %28 %18
               OpBranch %29
         %29 = OpLabel
               OpLoopMerge %31 %32 None
               OpBranch %33
         %33 = OpLabel
         %34 = OpLoad %17 %28
         %40 = OpAccessChain %39 %38 %18 %18
         %41 = OpLoad %17 %40
         %42 = OpAccessChain %39 %38 %18 %18
         %43 = OpLoad %17 %42
         %45 = OpExtInst %17 %1 SClamp %41 %43 %44
         %47 = OpSLessThan %46 %34 %45
               OpBranchConditional %47 %30 %31
         %30 = OpLabel
         %48 = OpAccessChain %39 %38 %18 %44
         %49 = OpLoad %17 %48
         %50 = OpAccessChain %19 %16 %18 %18
         %51 = OpLoad %6 %50
         %56 = OpCompositeConstruct %52 %51 %55 %55 %55
         %57 = OpCompositeConstruct %52 %55 %51 %55 %55
         %58 = OpCompositeConstruct %53 %56 %57
         %59 = OpLoad %17 %28
         %61 = OpAccessChain %39 %38 %18 %60
         %62 = OpLoad %17 %61
               OpStore %64 %58
         %66 = OpAccessChain %65 %64 %59 %62
         %67 = OpLoad %6 %66
         %68 = OpAccessChain %65 %11 %49
         %69 = OpLoad %6 %68
         %70 = OpFAdd %6 %69 %67
         %71 = OpAccessChain %65 %11 %49
               OpStore %71 %70
               OpBranch %32
         %32 = OpLabel
         %72 = OpLoad %17 %28
         %73 = OpIAdd %17 %72 %60
               OpStore %28 %73
               OpBranch %29
         %31 = OpLabel
         %74 = OpAccessChain %39 %38 %18 %44
         %75 = OpLoad %17 %74
         %76 = OpAccessChain %65 %11 %75
         %77 = OpLoad %6 %76
         %78 = OpAccessChain %19 %16 %18 %60
         %79 = OpLoad %6 %78
         %80 = OpFOrdEqual %46 %77 %79
               OpSelectionMerge %82 None
               OpBranchConditional %80 %81 %98
         %81 = OpLabel
         %85 = OpAccessChain %39 %38 %18 %18
         %86 = OpLoad %17 %85
         %87 = OpConvertSToF %6 %86
         %88 = OpAccessChain %39 %38 %18 %60
         %89 = OpLoad %17 %88
         %90 = OpConvertSToF %6 %89
         %91 = OpAccessChain %39 %38 %18 %60
         %92 = OpLoad %17 %91
         %93 = OpConvertSToF %6 %92
         %94 = OpAccessChain %39 %38 %18 %18
         %95 = OpLoad %17 %94
         %96 = OpConvertSToF %6 %95
         %97 = OpCompositeConstruct %52 %87 %90 %93 %96
               OpStore %84 %97
               OpBranch %82
         %98 = OpLabel
         %99 = OpAccessChain %39 %38 %18 %60
        %100 = OpLoad %17 %99
        %101 = OpConvertSToF %6 %100
        %102 = OpCompositeConstruct %52 %101 %101 %101 %101
               OpStore %84 %102
               OpBranch %82
         %82 = OpLabel
               OpReturn
               OpFunctionEnd
