; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 88
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %69
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %21 "i"
               OpName %24 "buf1"
               OpMemberName %24 0 "_GLF_uniform_int_values"
               OpName %26 ""
               OpName %69 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %23 ArrayStride 16
               OpMemberDecorate %24 0 Offset 0
               OpDecorate %24 Block
               OpDecorate %26 DescriptorSet 0
               OpDecorate %26 Binding 1
               OpDecorate %69 Location 0
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
         %17 = OpTypePointer Uniform %6
         %20 = OpTypePointer Function %15
         %22 = OpConstant %9 3
         %23 = OpTypeArray %15 %22
         %24 = OpTypeStruct %23
         %25 = OpTypePointer Uniform %24
         %26 = OpVariable %25 Uniform
         %27 = OpConstant %15 1
         %28 = OpTypePointer Uniform %15
         %39 = OpTypeBool
         %41 = OpConstant %15 3
         %60 = OpConstant %15 2
         %67 = OpTypeVector %6 4
         %68 = OpTypePointer Output %67
         %69 = OpVariable %68 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %21 = OpVariable %20 Function
         %18 = OpAccessChain %17 %14 %16 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %29 = OpAccessChain %28 %26 %16 %27
         %30 = OpLoad %15 %29
               OpStore %21 %30
               OpBranch %31
         %31 = OpLabel
               OpLoopMerge %33 %34 None
               OpBranch %35
         %35 = OpLabel
         %36 = OpLoad %15 %21
         %37 = OpAccessChain %28 %26 %16 %16
         %38 = OpLoad %15 %37
         %40 = OpSLessThan %39 %36 %38
               OpBranchConditional %40 %32 %33
         %32 = OpLabel
         %42 = OpAccessChain %17 %14 %16 %41
         %43 = OpLoad %6 %42
         %44 = OpFNegate %6 %43
         %45 = OpLoad %6 %8
         %46 = OpFMul %6 %44 %45
         %47 = OpExtInst %6 %1 FAbs %46
         %48 = OpAccessChain %17 %14 %16 %16
         %49 = OpLoad %6 %48
         %50 = OpFAdd %6 %47 %49
               OpStore %8 %50
               OpBranch %34
         %34 = OpLabel
         %51 = OpLoad %15 %21
         %52 = OpIAdd %15 %51 %27
               OpStore %21 %52
               OpBranch %31
         %33 = OpLabel
         %53 = OpLoad %6 %8
         %54 = OpAccessChain %17 %14 %16 %27
         %55 = OpLoad %6 %54
         %56 = OpFOrdGreaterThan %39 %53 %55
               OpSelectionMerge %58 None
               OpBranchConditional %56 %57 %58
         %57 = OpLabel
         %59 = OpLoad %6 %8
         %61 = OpAccessChain %17 %14 %16 %60
         %62 = OpLoad %6 %61
         %63 = OpFOrdLessThan %39 %59 %62
               OpBranch %58
         %58 = OpLabel
         %64 = OpPhi %39 %56 %33 %63 %57
               OpSelectionMerge %66 None
               OpBranchConditional %64 %65 %83
         %65 = OpLabel
         %70 = OpAccessChain %28 %26 %16 %60
         %71 = OpLoad %15 %70
         %72 = OpConvertSToF %6 %71
         %73 = OpAccessChain %28 %26 %16 %27
         %74 = OpLoad %15 %73
         %75 = OpConvertSToF %6 %74
         %76 = OpAccessChain %28 %26 %16 %27
         %77 = OpLoad %15 %76
         %78 = OpConvertSToF %6 %77
         %79 = OpAccessChain %28 %26 %16 %60
         %80 = OpLoad %15 %79
         %81 = OpConvertSToF %6 %80
         %82 = OpCompositeConstruct %67 %72 %75 %78 %81
               OpStore %69 %82
               OpBranch %66
         %83 = OpLabel
         %84 = OpAccessChain %28 %26 %16 %27
         %85 = OpLoad %15 %84
         %86 = OpConvertSToF %6 %85
         %87 = OpCompositeConstruct %67 %86 %86 %86 %86
               OpStore %69 %87
               OpBranch %66
         %66 = OpLabel
               OpReturn
               OpFunctionEnd
