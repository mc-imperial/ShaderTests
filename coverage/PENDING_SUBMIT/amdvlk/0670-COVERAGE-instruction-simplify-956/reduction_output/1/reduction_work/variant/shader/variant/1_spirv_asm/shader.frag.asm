; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 75
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %22 %51
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %12 "buf1"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %22 "gl_FragCoord"
               OpName %37 "a"
               OpName %51 "_GLF_color"
               OpName %53 "buf0"
               OpMemberName %53 0 "_GLF_uniform_int_values"
               OpName %55 ""
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 1
               OpDecorate %22 BuiltIn FragCoord
               OpDecorate %51 Location 0
               OpDecorate %52 ArrayStride 16
               OpMemberDecorate %53 0 Offset 0
               OpDecorate %53 Block
               OpDecorate %55 DescriptorSet 0
               OpDecorate %55 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 2
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpTypeInt 32 1
         %16 = OpConstant %15 0
         %17 = OpTypePointer Uniform %6
         %20 = OpTypeVector %6 4
         %21 = OpTypePointer Input %20
         %22 = OpVariable %21 Input
         %23 = OpConstant %9 0
         %24 = OpTypePointer Input %6
         %29 = OpTypeBool
         %33 = OpConstant %15 1
         %36 = OpTypePointer Function %15
         %50 = OpTypePointer Output %20
         %51 = OpVariable %50 Output
         %52 = OpTypeArray %15 %10
         %53 = OpTypeStruct %52
         %54 = OpTypePointer Uniform %53
         %55 = OpVariable %54 Uniform
         %56 = OpTypePointer Uniform %15
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %37 = OpVariable %36 Function
         %18 = OpAccessChain %17 %14 %16 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %25 = OpAccessChain %24 %22 %23
         %26 = OpLoad %6 %25
         %27 = OpAccessChain %17 %14 %16 %16
         %28 = OpLoad %6 %27
         %30 = OpFOrdLessThan %29 %26 %28
               OpSelectionMerge %32 None
               OpBranchConditional %30 %31 %32
         %31 = OpLabel
         %34 = OpAccessChain %17 %14 %16 %33
         %35 = OpLoad %6 %34
         %38 = OpLoad %15 %37
         %39 = OpAccessChain %24 %22 %23
         %40 = OpLoad %6 %39
         %41 = OpConvertFToS %15 %40
         %42 = OpSDiv %15 %38 %41
         %43 = OpExtInst %6 %1 Ldexp %35 %42
               OpStore %8 %43
               OpBranch %32
         %32 = OpLabel
         %44 = OpLoad %6 %8
         %45 = OpAccessChain %17 %14 %16 %16
         %46 = OpLoad %6 %45
         %47 = OpFOrdEqual %29 %44 %46
               OpSelectionMerge %49 None
               OpBranchConditional %47 %48 %70
         %48 = OpLabel
         %57 = OpAccessChain %56 %55 %16 %16
         %58 = OpLoad %15 %57
         %59 = OpConvertSToF %6 %58
         %60 = OpAccessChain %56 %55 %16 %33
         %61 = OpLoad %15 %60
         %62 = OpConvertSToF %6 %61
         %63 = OpAccessChain %56 %55 %16 %33
         %64 = OpLoad %15 %63
         %65 = OpConvertSToF %6 %64
         %66 = OpAccessChain %56 %55 %16 %16
         %67 = OpLoad %15 %66
         %68 = OpConvertSToF %6 %67
         %69 = OpCompositeConstruct %20 %59 %62 %65 %68
               OpStore %51 %69
               OpBranch %49
         %70 = OpLabel
         %71 = OpAccessChain %56 %55 %16 %33
         %72 = OpLoad %15 %71
         %73 = OpConvertSToF %6 %72
         %74 = OpCompositeConstruct %20 %73 %73 %73 %73
               OpStore %51 %74
               OpBranch %49
         %49 = OpLabel
               OpReturn
               OpFunctionEnd
